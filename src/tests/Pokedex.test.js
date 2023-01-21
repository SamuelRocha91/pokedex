import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

const types = [
  'Electric',
  'Bug',
  'Poison',
  'Psychic',
  'Fire',
  'Normal',
  'Dragon',
];

const idTypeButtons = 'pokemon-type-button';
const idButtonNextPokemon = 'next-pokemon';

describe('Requisito 05', () => {
  test('Verifica se a página contém um heading h2 com o texto "Encountered Pokémon"', () => {
    renderWithRouter(<App />);

    const h2 = screen.getByRole('heading', { level: 2, name: /Encountered Pokémon/i });
    expect(h2).toBeInTheDocument();
  });

  test('Verifica se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado:', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /Próximo Pokémon/i });
    pokemonList.forEach((pokemon) => {
      const pokemonRendered = screen.getByText(pokemon.name);
      expect(pokemonRendered).toBeInTheDocument();
      userEvent.click(button);
    });
    expect(screen.getByText(pokemonList[0].name)).toBeInTheDocument();
    expect(screen.queryByText(pokemonList[1].name)).not.toBeInTheDocument();
  });
  test('Veifica se existe um botão de filtragem para cada tipo de Pokémon, sem repetição;', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId(idTypeButtons);
    const lengthTypes = types.length;
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
      expect(types).toContain(button.textContent);
    });
    expect(buttons).toHaveLength(lengthTypes);
  });

  test('Verifica se a partir da seleção de um botão de tipo, a Pokédex circula somente pelos Pokémon daquele tipo', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId(idTypeButtons);
    buttons.forEach((button) => {
      const lengthTypes = pokemonList
        .filter((pokemon) => pokemon.type === button.textContent);
      if (lengthTypes.length <= 1) {
        userEvent.click(button);
        const nextPokemon = screen.getByTestId(idButtonNextPokemon);
        expect(nextPokemon).toHaveProperty('disabled', true);
      } else {
        userEvent.click(button);
        const type = screen.getByTestId('pokemon-type');
        expect(type).toHaveTextContent(button.textContent);

        const nextPokemon = screen.getByTestId(idButtonNextPokemon);
        userEvent.click(nextPokemon);
        expect(type).toHaveTextContent(button.textContent);
      }
    });
  });

  test('Verifica se o botão "all" está sempre visível', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeVisible();

    const nextPokemon = screen.getByTestId(idButtonNextPokemon);
    userEvent.click(nextPokemon);

    expect(buttonAll).toBeVisible();

    userEvent.click(buttonAll);
    expect(buttonAll).toBeVisible();

    const buttons = screen.getAllByTestId(idTypeButtons);
    userEvent.click(buttons[0]);

    expect(buttonAll).toBeVisible();
  });

  test('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();

    const type = screen.getByTestId('pokemon-type');
    const nextPokemon = screen.getByRole('button', { name: /Próximo Pokémon/i });

    expect(type).toHaveTextContent(pokemonList[0].type);
    expect(nextPokemon).toHaveProperty('disabled', false);

    userEvent.click(nextPokemon);

    expect(type).toHaveTextContent(pokemonList[1].type);
    expect(nextPokemon).toHaveProperty('disabled', false);

    const buttons = screen.getAllByTestId(idTypeButtons);
    userEvent.click(buttons[0]);

    expect(type).not.toHaveTextContent(pokemonList[2].type);
    expect(nextPokemon).toHaveProperty('disabled', true);

    userEvent.click(buttonAll);
    expect(type).toHaveTextContent(pokemonList[0].type);
    expect(nextPokemon).toHaveProperty('disabled', false);

    userEvent.click(nextPokemon);
    expect(type).toHaveTextContent(pokemonList[1].type);
    expect(nextPokemon).toHaveProperty('disabled', false);
  });
});
