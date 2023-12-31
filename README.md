# Техническое задание

[Ссылка на деплой](https://sber-test-gamma.vercel.app/)

## О практиках, масштабируемости и надежности:

1. Использовал декомпозицию кода и компонентный подход. Выделял по возможности в отдельные компоненты как логику, так и представление.
2. Добавил в проект абсолютные paths, что позволило импортировать файлы из понятных путей. Также сохранял порядок импортируемых файлов.
3. Использовал в проекте Prettier и Eslint, что позволило сохранять единообразие кода.
4. Составил базовую файловую структуру, которая предполагает разделение проекта на определенные группы сущностей (компоненты, иконки, хранилище и прочее). Также структура предполагает выделение в отдельные файлы таких сущностей как константы, типы и прочее при необходимости.
5. Создал некоторые переиспользуемые компоненты (например, Container, Stack и Title)
6. Реализовал хук, который позволяет получить ширину видимой области экрана
7. В проекте активно использовал TypeScript. Инструмент, который сильно выручает и позволяет писать документированный, прозрачный и поддерживаемый код.

## О вспомогательных утилитах, библиотеках и технологиях:

1. Использовал новый для себя инструмент создания и сборки приложения Vite
2. emotions.js для написания css-in-js стилей
3. redux-toolit для работы с состоянием приложения + asyncThunk для асинхронных запросов

## Затраченное время

На задачу потратил 11 часов

## Впечатление

Впечателение получил положительное. Прикольный опыт — я как попробовал и новые фишки, так и повторил старые подходы. А картинка с котиком непрерывно веселила своим присутствием на экране :D
