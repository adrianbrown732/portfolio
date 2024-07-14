"use client";

import "./style.css";
import Header from "./header";
import Nav from "./nav";
import Main from "./content";

export default function HomePage() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Main></Main>
    </>
  );
}
