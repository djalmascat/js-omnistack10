import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  useEffect(() => {
    
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    setGithubUsername('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
             className="github_username" 
             id="github_username" 
             required 
             value={github_username}
             onChange={(e) => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
             className="techs" 
             id="techs" 
             required
             value={techs}
             onChange={(e) => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
               type="number" 
               className="latitude" 
               id="latitude" 
               required 
               value={latitude}
               onChange={(e) => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
               type="number" 
               className="longitude" 
               id="longitude" 
               required 
               value={longitude}
               onChange={(e) => setLongitude(e.target.value)} 
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6811608?s=400&u=27e54fd2d0c10e4666fe91e4f5d9feac4d83afd7&v=4" alt="Bruno Lessa"/>
              <div className="user-info">
                <strong>Bruno Lessa</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>My goal is to learn how to code using technologies such javascript, node, react and react native, focusing in build a consistent background in web development.</p>
            <a href="https://github.com/djalmascat" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6811608?s=400&u=27e54fd2d0c10e4666fe91e4f5d9feac4d83afd7&v=4" alt="Bruno Lessa"/>
              <div className="user-info">
                <strong>Bruno Lessa</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>My goal is to learn how to code using technologies such javascript, node, react and react native, focusing in build a consistent background in web development.</p>
            <a href="https://github.com/djalmascat" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6811608?s=400&u=27e54fd2d0c10e4666fe91e4f5d9feac4d83afd7&v=4" alt="Bruno Lessa"/>
              <div className="user-info">
                <strong>Bruno Lessa</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>My goal is to learn how to code using technologies such javascript, node, react and react native, focusing in build a consistent background in web development.</p>
            <a href="https://github.com/djalmascat" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/6811608?s=400&u=27e54fd2d0c10e4666fe91e4f5d9feac4d83afd7&v=4" alt="Bruno Lessa"/>
              <div className="user-info">
                <strong>Bruno Lessa</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>My goal is to learn how to code using technologies such javascript, node, react and react native, focusing in build a consistent background in web development.</p>
            <a href="https://github.com/djalmascat" target="_blank" rel="noopener noreferrer">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
