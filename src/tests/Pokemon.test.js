import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemonList from '../data';

describe('Requisito 06', () => {
  test('Verifica se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);
    const pokemonType = screen.getByTestId('pokemon-type');
    const pokemonName = screen.getByTestId('pokemon-name');
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const image = screen.getByRole('img');

    expect(pokemonType).toBeInTheDocument();
    expect(pokemonType).toHaveTextContent(pokemonList[0].type);
    expect(pokemonName).toBeInTheDocument();
    expect(pokemonName).toHaveTextContent(pokemonList[0].name);
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonWeight).toHaveTextContent(`Average weight: ${pokemonList[0]
      .averageWeight.value} ${pokemonList[0].averageWeight.measurementUnit}`);
    expect(image).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(image).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('Verifica se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. ', () => {
    renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/pokemon/25');
  });

  test('Verifica se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });

    userEvent.click(link);

    const details = screen.getByRole('heading', { level: 2, name: /pikachu details/i });
    const summary = screen.getByRole('heading', { level: 2, name: /summary/i });
    const text = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    const locations = screen.getByRole('heading', { level: 2, name: /game locations of pikachu/i });

    const { location: { pathname } } = history;
    expect(details).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(locations).toBeInTheDocument();
    expect(pathname).toBe('/pokemon/25');
  });

  test('Verifica se existe um ícone de estrela nos Pokémon favoritados', () => {
    const { history } = renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');

    expect(history.location.pathname).toBe('/');

    userEvent.click(buttons[2]);

    const link = screen.getByRole('link', { name: /more details/i });
    const caterpie = screen.getByTestId('pokemon-name');

    expect(link).toBeInTheDocument();
    expect(caterpie).toHaveTextContent(/caterpie/i);

    userEvent.click(link);

    const details = screen.getByRole('heading', { level: 2, name: /caterpie details/i });
    const checkbox = screen.getByRole('checkbox');

    expect(history.location.pathname).toBe('/pokemon/10');
    expect(checkbox).toHaveProperty('checked', false);
    expect(details).toBeInTheDocument();

    userEvent.click(checkbox);

    const img = screen.getByRole('img', { name: 'Caterpie is marked as favorite' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/star-icon.svg');

    const home = screen.getByRole('link', { name: /home/i });

    userEvent.click(home);
    expect(history.location.pathname).toBe('/');

    const button = screen.getAllByTestId('pokemon-type-button');

    userEvent.click(button[2]);

    expect(screen.getByRole('img', { name: 'Caterpie is marked as favorite' })).toBeInTheDocument();
  });
});
