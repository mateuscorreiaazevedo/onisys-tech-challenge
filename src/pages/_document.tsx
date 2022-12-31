/* eslint-disable react/no-unescaped-entities */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Desafio tech para a vaga de React Developer" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
