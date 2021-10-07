# Welcome to React Joke Generator! [![Netlify Status](https://api.netlify.com/api/v1/badges/d161c842-af40-41b8-a1cc-40274a18d9fb/deploy-status)](https://app.netlify.com/sites/mbh-react-joke-generator/deploys)

## [View Site](https://mbh-react-joke-generator.netlify.app/)
## Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/react-joke-generator.git
 $ cd webpack-joke-generator
```

## About the User
* The user can visit Joke Generator to get a randomly generated web development joke.


## Features: 
* A random web development joke setup will be generated upon clicking the Get A Joke button.
* The joke delivery will appear underneath the setup upon clicking the Get Punchline button.
* Clicking the Get Another Joke button begins the process over again!

## Relevant Links:
* [Figma Wireframe](https://www.figma.com/file/dUTnw5fZfWCB2RCRJpS7Af/JJ-Wireframe-(JS)?node-id=0%3A1)

## Code Snippets:

```javascript
return (
    <div className="App">
      <div className="mainContainer">
        <img src={logo} alt="joke site logo" />
        <h1>{ joke.setup }</h1>
        <h4>{ btnText !== 'Get Punchline!' ? joke.punchline : ''}</h4>
        {btnText === 'Get A Joke' || btnText === 'Get Another Joke' ? (
          <button className="button" onClick={getAJoke} type="button">{btnText}</button>
        ) : (
          <button className="button" onClick={() => setBtnText('Get Another Joke')} type="button">{btnText}</button>
        )}
      </div>
    </div>
  );
```

## Screenshots:

<img width="381" alt="2021-10-06 (1)" src="https://user-images.githubusercontent.com/86667443/136299246-451e233e-cbdc-4e03-916f-642ac1db049c.png">
<img width="375" alt="2021-10-06 (2)" src="https://user-images.githubusercontent.com/86667443/136299248-a1559d1e-b5ea-4e75-a305-2f321e7297a9.png">
<img width="370" alt="2021-10-06 (3)" src="https://user-images.githubusercontent.com/86667443/136299254-bd0aca97-8cd3-48fc-91aa-27a5f1291c80.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
