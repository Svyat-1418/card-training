# CARD TRAINING

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installed dependencies
  + axios
  + reduxjs/toolkit
  + material UI + Icons
  + react-redux
  + react-router-dom
  + eslint 
  + prettier
  
## Git Flow

#### И так, Git Flow следующий:
1.  Создаём каждый свою ветку кликнув
правой кнопкой мыши по ветке dev и 
выбрав пункт "new branch from 'dev' " :
+ Димв - _dima_dev_
+ Свят - _svyat_dev_
+ Ксюша - _ksenia_dev_

2. Теперь каждый будет вести разработку в свщей ветке. 
Изначально, когда код синхронизирован после создания 
своей ветки она будет иметь состояние последнего commit-a, 
но после каждого обновления dev наши ветки тоже нужно бедет
актуализировать. Для Этого переключаемся на свою ветку, 
пр. кн мыши по ней и "merge 'dev' into' 'название своей ветки' "

3. Когда кто-то из нас закрывает таску сделав последний
commit в своей ветке 'мёржит' свою ветку в dev. Для этого
переключаемся на dev, выполняем git fetch, открываем вкладку
внизу WebStorm и смотрим. Если возле dev появляется _синяя стрелка_,
то пр. кн. мыши ао dev и 'update'. Если вошникнет merge conflict, 
решаем его и делаем git push. Нет конфликта - SUPER :) 
просто git push.

#### При возникнавении вопров или предложения поправки писать Святу :)
#### P.S. ОБЯЗАТЕЛЬНО ПИСАТЬ В ОБШИЙ ЧАТ ПОСЛЕ ОБНОВЛЕНИЯ  REMOTE/dev!!!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
