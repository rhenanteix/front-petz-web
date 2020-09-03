import React, { useState, useEffect } from "react";
import Router from "next/router";
import Head from "next/head";

import api from "../services";

import Header from "../components/Header";
import Filter from "../components/Filter";

import styled from "styled-components";

export const Container = styled.section`
  max-width: 799px;
  margin: auto;
  padding: 32px 20px;
`;

export const Post = styled.article`
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

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  margin-top: 16px;
  color: #ffffff;
  cursor: pointer;
`;

export const ButtonRemove = styled.button`
  background-color: #555555;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  margin-top: 16px;
  color: #ffffff;
  cursor: pointer;
  float: right;
`;

function Home({ data }) {
  const [posts, setPosts] = useState(data);
  const [filter, setFilter] = useState("all");
  const [users, setUsers] = useState([]);

  function handleChange(event) {
    setFilter(event.target.value);
  }

  useEffect(() => {
    api
      .get(`/posts${filter === "all" ? "" : `?userId=${filter}`}`)
      .then((response) => {
        setPosts(response.data);
      });
  }, [filter, posts]);

  useEffect(() => {
    api.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  function handleRemovePost(id) {
    api.delete(`/posts/${id}`).then((response) => {
      console.log(response);
    });
  }
  return (
    <>
      <Head>
        <title>Petz Teste</title>
      </Head>
      <Container>
        <Header></Header>
        <Filter handleChange={handleChange} users={users} />
        {posts.map((post) => (
          <Post key={post.id}>
            {users.map((user) => (
              <p>
                <small>{user.id === post.id ? `por: ${user.name}` : ""}</small>
              </p>
            ))}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button
              onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}
            >
              Vizualizar
            </Button>
            <ButtonRemove onClick={() => handleRemovePost(post.id)}>
              Deletar
            </ButtonRemove>
          </Post>
        ))}
      </Container>
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await api.get(`/posts`);

  return { data: response.data };
};

export default Home;
