![Wiki-Match Logo](./src/assets/logo.svg)

# Wiki-Match-Frontend

## Table Of Content

1. [Project Overview](#project-overview)
2. [Problem Statement](#problem-statement)
3. [Solution](#solution)
4. [Features](features)
5. [Technologies](technologies)
6. [Contributors](contributors)

## Project Overview

**Wiki-Match-Frontend** is a user-friendly solution dessigned to faccilitate the contribution process on Wikimedia, focusing on linking audio pronounciation on WikiCommon to the corresponding Wikidata item. The problem we are addressing is the absence of audio pronounciation in a certian language or no audio pronouncitiation at all. Wiki-Match, with it's user friendly interface allows users to listen to audio pronunciations in a their specified choosen language and match them with the correct Wikidata items or entries.

## Problem Statement

Wikimedia being a large platform, is divided into the Wikidata and WikiCommons. WikiCommons has the charge of hosting audio files everything multimedia including pronounciation recording, which is sometimes not linked to corresponding wikidata thereby creating a gap where some wiki data lack audio pronounciations in languages.

## Solution

**Wiki-Match-Frontend** with it's user friendly interface,

- Allows Signed in user to select their language proficiency.
- Listen to the provided pronounciation audio and,
- Match these audio files to the correct Wikidata entries.
- Skip if unsure of the wikidata
- Or click on a readmore button to view more or read more information about the wikidata he/she suspects to match the sound.
- With all this done and no audio pronounciation is left, The user will be directed to a Gratitude page Thanking them for a job well done and a message indicating there are no more audios in that language to link a particular wikidata and they can come back again or select another language and contribute if The are multi-lingua.

## Features

1. **Landing Page**
i. **User Authentication** Secure User Login by MediaWiki OAuth with redirections of accounts if neccesary on the landing page
ii. **Select Language of proficiency** An auto search will help users to complete their language of proficiency.

2. **Audio-Wikidata Matching page** Users can match audio files to Wikidata by clicking on a checkbox, with the ability to skip when uncertain on which wikidata corresponds to the audio pronounciation.
3. **Gratitude** After completing a set of matches, users are shown a Gratitude Page that thanks them for their contributions, highlighting the positive impact of their work on the Wikimedia community.

## Technologies

- Javascript,
- React + Vite

- Tailwind Css

## Contributors
