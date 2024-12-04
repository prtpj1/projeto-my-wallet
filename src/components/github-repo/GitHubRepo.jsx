import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubRepo = () => (
  <a
    className="btn-github"
    type="button"
    href="https://github.com/prtpj1/projeto-my-wallet"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub size={ 20 } />
    <h1>Project Repository</h1>
  </a>
);

export default GitHubRepo;
