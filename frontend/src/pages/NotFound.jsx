import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | EKOSYS</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', color: '#f59e0b', marginBottom: '1rem' }}>404</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page Not Found</h2>
          <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </section>
    </>
  );
}
