import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Requisito 02', () => {
  test('Verifica se a página "/about" contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    screen.logTestingPlaygroundURL();

    const h2 = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });

    expect(h2).toBeInTheDocument();
  });
  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const p = screen.getAllByText(/Pokémon/i);

    expect(p).toHaveLength(2);
  });

  test('Verifica se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const p = screen.getAllByText(/Pokémon/i);

    expect(p).toHaveLength(2);
  });

  test('Verifica se a página contém uma imagem específica de uma Pokédex', () => {
    const linkImage = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    renderWithRouter(<About />);

    const image = screen.getByRole('img');

    expect(image).toHaveProperty('src', linkImage);
  });
});
