import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import About from '../routes/about/about';
import Form from '../routes/forms/forms';
import { beforeEach, describe, expect, test } from 'vitest';
import Home from '../routes/home/home';
import NotFound from '../routes/notfound/notFound';
import { render, screen } from '@testing-library/react';
import { Route } from 'react-router';
import Header from '../header/header';

describe('Testing routing', () => {
  beforeEach(() => {
    render(
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  });

  test('should generate home', () => {
    const home = screen.getByTestId('home');
    expect(home).toBeTruthy();
  });
});
