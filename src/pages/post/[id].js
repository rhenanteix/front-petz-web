import Link from "next/link";
import fetch from "node-fetch";
import React from "react";

import Header from "../../components/Header";

import styled from "styled-components";

export const Container = styled.section`
  max-width: 799px;
  margin: auto;
  padding: 32px 20px;
`;

export const Article = styled.article`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin-bottom: 32px;
  background-color: #ffffff;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
  p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    line-height: 24px;
  }
`;
export const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  text-transform: uppercase;
  margin-right: 8px;
  margin-bottom: 32px;
  display: flex;
  cursor: pointer;
  font-weight: 700;
`;

const Post = ({ post }) => {
  return (
    <>
      <Container>
        <Header />
        <Link href="/">
          <LinkText>Voltar</LinkText>
        </Link>
        <Article>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </Article>
      </Container>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  // Pass data to the page via props
  return { props: { post } };
}

export default Post;
