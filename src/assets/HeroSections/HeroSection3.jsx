"use client";

import Carrusel2 from "../Carrusel/Carrusel2";
import mongo2 from '../../img/iconosBackend/mongo2.png'
import graphql from '../../img/iconosBackend/graphQL.jpg'
import nestjs from '../../img/iconosBackend/nest.png'
import node from '../../img/iconosBackend/node.jpg'
import postgres from '../../img/iconosBackend/postgres.jpg'
import react from '../../img/iconosFrontend/react.png'
import css from '../../img/iconosFrontend/css.jpg'
import html from '../../img/iconosFrontend/html.png'
import reactNative from '../../img/iconosFrontend/react-native.png'
import jenkins from '../../img/iconosFrontend/jenkins.jpg'
import "./HeroSection3.css"
const arrayBackend=[mongo2,graphql,nestjs,node,postgres]
const arrayFrontend=[react,css,reactNative,html,jenkins]
const OPTIONS = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function HeroSection3() {
  return (
    <div className="constainerTecn">
      <h2 className="titleh2 instrument-serif-regular" >Backend</h2>
       <Carrusel2 slides={SLIDES} options={OPTIONS} arrayBackend={arrayBackend}/>
       <h2 className="titleh2 instrument-serif-regular">Frontend y Otros</h2>
       <Carrusel2 slides={SLIDES} options={OPTIONS} arrayBackend={arrayFrontend}/>
    </div>
  );
}

//generador de grip
