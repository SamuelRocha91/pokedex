import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 01', () => {
  test('Verifica se a aplicação possui os links: "Home", "About" e "Favorite Pokémon"', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const favoritePokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoritePokemonLink).toBeInTheDocument();
  });

  test('Verifica se a aplicação é redirecionada para a página inicial, na URL / ao clicar no link Home da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', { name: /home/i });

    userEvent.click(homeLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });

  test('Verifica se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/about');
  });

  test('Verifica se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação', () => {
    const { history } = renderWithRouter(<App />);

    const favoritePokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });

    userEvent.click(favoritePokemonLink);

    const { location: { pathname } } = history;

    expect(pathname).toBe('/favorites');
  });

  test('Verifica se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/paginadesconhecida');
    });

    const pageNotFound = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });

    expect(pageNotFound).toBeInTheDocument();
  });
});
