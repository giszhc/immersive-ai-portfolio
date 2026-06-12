import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { profile } from './data/profile';

describe('portfolio homepage', () => {
  it('renders the Chinese profile by default and toggles to English', async () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: profile.cn.hero.name })).toBeInTheDocument();
    expect(screen.getByText(profile.cn.hero.role)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /switch to english/i }));

    expect(screen.getByRole('heading', { name: profile.en.hero.name })).toBeInTheDocument();
    expect(screen.getByText(profile.en.hero.role)).toBeInTheDocument();
  });

  it('opens and closes a project details dialog', async () => {
    render(<App />);

    const firstProject = profile.cn.projects[0];
    await userEvent.click(screen.getByRole('button', { name: new RegExp(firstProject.title, 'i') }));

    const dialog = screen.getByRole('dialog', { name: firstProject.title });
    expect(within(dialog).getByText(firstProject.summary)).toBeInTheDocument();
    expect(within(dialog).getByText(firstProject.impact[0])).toBeInTheDocument();

    await userEvent.click(within(dialog).getByRole('button', { name: /close project details/i }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('keeps project image paths local to the app', () => {
    const images = [profile.assets.heroImage, ...profile.cn.projects.map((project) => project.image)];

    expect(images).toHaveLength(5);
    for (const image of images) {
      expect(image.startsWith('./images/') || image.startsWith('/images/')).toBe(true);
      expect(image).not.toMatch(/^https?:\/\//);
    }
  });
});
