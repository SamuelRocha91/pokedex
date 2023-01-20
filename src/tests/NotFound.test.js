import React from 'react';
import { screen, act } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Requisito 04', () => {
  test('Verifica se a página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/paginadesconhecida');
    });

    const h2 = screen.getByRole('heading', { level: 2, name: /Page requested not found/i });

    expect(h2).toBeInTheDocument();
  });

  test('Verifica se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { history } = renderWithRouter(<App />);

    act(() => {
      history.push('/paginadesconhecida');
    });

    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
