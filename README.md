
#### NEXUS-AI

<p align="center">  
  <a href="https://www.youtube.com/@Pktech-1911">
    <img alt="NEXUS" src="https://i.ibb.co/0p2bWfbv/nexus-xmd.jpg">
  </a>
</p>
<p align="center">
<a href="https://github.com/Pkdriller?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/Pkdriller?label=Followers&style=social"></a>
<a href="https://github.com/Pkdriller/NEXUS-AI/stargazers/"><img title="Stars" src="https://img.shields.io/github/stars/Pkdriller/NEXUS-AI?&style=social"></a>
<a href="https://github.com/Pkdriller/NEXUS-AI/network/members"><img title="Fork" src="https://img.shields.io/github/forks/Pkdriller/NEXUS-AI?style=social"></a>
<a href="https://github.com/Pkdriller/NEXUS-AI/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/Pkdriller/NEXUS-AI?label=Watching&style=social"></a>
</p>
<p align="center">
  
----

 <p align="center"><img src="https://profile-counter.glitch.me/{NEXUS-AI}/count.svg" alt="Pkdriller :: Visitor's Count" old_src="https://profile-counter.glitch.me/{Pkdriller}/count.svg" /></p>

----

## Deployment Options

### **Fork & Star the Repository**
   - Start by forking this repository and giving it a ⭐ to support Pkdriller!
     To set up the NEXUS-AI quickly, first fork this repository:
[NEXUS-AI Github Repo](https://img.shields.io/badge/Github-Fork%20Repo-red?style=for-the-badge&logo=Github)](https://github.com/Pkdriller/NEXUS-AI/fork)

### **PAIRING CODE QR CODE**
   - Visit the bot site to generate a pairing code and get **SESSION ID.**

     [![NEXUS-AI Github Repo](https://img.shields.io/badge/Whatsapp-Pair%20Code-green?style=for-the-badge&logo=Whatsapp)](https://tohid-md-pair-06797088617d.herokuapp.com/)

### DEPLOY BY SESSION ID (WHATSAPP LOG WITH PAIR CODE)

<a href='https://tohid-khan-web.vercel.app/' target="_blank"><img alt='Get Session ID' src='https://img.shields.io/badge/%F0%9F%9A%80%EF%B8%8F%E2%80%8D%20-%F0%9F%93%8B%20%20PAIR%20CODE%20WEB%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-blue' width="400" height="50" alt="Deploy bot"/></a>

### **Step-by-Step Deployment Guide**

**Option A: Deploy on Heroku**
1. [Create an Account on Heroku](https://signup.heroku.com/) if you haven’t already.
2. Click the button below to deploy directly on Heroku:
   <br>
   <a href='https://dashboard.heroku.com/new?template=https://github.com/Pkdriller/NEXUS-AI' target="_blank">
      <img alt='Deploy on Heroku' src='https://img.shields.io/badge/-DEPLOY-purple?style=for-the-badge&logo=heroku&logoColor=white'/>
   </a>

**Option B: Deploy on Koyeb**
1. [Sign Up on Koyeb](https://app.koyeb.com/auth/signup).
3. Deploy your app using the button below:
   <br>
   <a href='https://github.com/Pkdriller/NEXUS-AI' target="_blank">
      <img alt='Deploy on Koyeb' src='https://img.shields.io/badge/-DEPLOY-red?style=for-the-badge&logo=koyeb&logoColor=white'/>
   </a>

**Option C: Deploy on Railway**
1. [Create an Account on Railway](https://railway.app/login) if you don’t have one.
2. Click the button below to deploy using Railway:
   <br>
   <a href='https://railway.app/login' target="_blank">
      <img alt='Deploy on Railway' src='https://img.shields.io/badge/-DEPLOY-purple?style=for-the-badge&logo=railway&logoColor=white'/>
   </a>

**Option D: Deploy on Toystack**
1. [Create an Account on Toystack](https://toystack.ai) if you don’t have one.
2. Click the button below to deploy using Toystack:
   <br>
   <a href='https://toystack.ai' target="_blank">
      <img alt='Toystack' src='https://img.shields.io/badge/-DEPLOY-blue?style=for-the-badge&logo=toystack&logoColor=white'/>
   </a>

**Option E: Deploy on Render**
1. [Create an Account on Render](https://dashboard.render.com/register) if you don’t have one.
2. Click the button below to deploy using Render:
   <br>
   <a href='https://dashboard.render.com' target="_blank">
      <img alt='Deploy on Render' src='https://img.shields.io/badge/-DEPLOY-black?style=for-the-badge&logo=render&logoColor=white'/>
   </a>
   
   **Option F: Deploy on Replit**
1. [Create an Account on Replit](https://repl.it) if you don’t have one.
2. Click the button below to deploy using Replit:
   <br>
   <a href='https://repl.it/github/Pkdriller/NEXUS-AI' target="_blank">
      <img alt='Deploy on Replit' src='https://img.shields.io/badge/-DEPLOY-orange?style=for-the-badge&logo=replit&logoColor=white'/>
   </a>
   
    **Option G: Deploy on Panel**
 1. First You Have to Sign up on discord using web or app then click below.
2. [Sign Up On Panel](https://bot-hosting.net/?aff=1097457675723341836) if you don’t have Already.
4. Click the button below to deploy using Panel:
   <br>
   <a href='https://bot-hosting.net/?aff=1097457675723341836' target="_blank">
      <img alt='Deploy in Panel' src='https://img.shields.io/badge/-DEPLOY-green?style=for-the-badge&logo=Cloudflare&logoColor=white'/>
   </a>
   
      **Tutorial For Panel**
1. First You Have to Sign up on discord using web or app download from playstore.
   <br>
   <a href='https://www.youtube.com/@Pktech-1911' target="_blank">
      <img alt='Deployment Tutorial' src='https://img.shields.io/badge/-Tutorial-red?style=for-the-badge&logo=youtube&logoColor=white'/>
   </a>
   
---

-----------

### <br>   ❖ DEPLOY_WORKFLOWS ❖
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
```

-----------
  
[![JOIN WHATSAPP CHANNEL](https://raw.githubusercontent.com/Neeraj-x0/Neeraj-x0/main/photos/suddidina-join-whatsapp.png)](https://whatsapp.com/channel/0029Vad7YNyJuyA77CtIPX0x)

--------
