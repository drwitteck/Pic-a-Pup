<template>
  <div>
    <div class="video-background">
        <div class="video-foreground">
            <iframe src="https://www.youtube.com/embed/djtqB8qFS1Y?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=W0LHTWG-UmQ"
                frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
<div class="main">
  <div id='content'>
    <div class='title'>
      <img id="logo" src="../pictures/pap.png">
      <span>Pic-a-Pup</span>
    </div>
    <p>coming soon</p>
    <div class="cta">
      <router-link to="/signup">Sign Up</router-link>
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}

// Content Styling
@import url(https://fonts.googleapis.com/css?family=Quicksand:400,300,700);
html,
body {
  width: 100%;
  margin: 0 auto;
  background-color: #1c1c1c;
  font-family: "Quicksand", sans-serif;
  #background {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
    overflow: hidden;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    overflow: hidden;
    transform: translate(-50%, -50%);
    background: linear-gradient(
      45deg,
      rgba(85, 16, 83, 0.8),
      rgba(30, 129, 150, 0.8)
    );
    // clip-path: polygon(0 0, 100% 0, 100% 40vh, 0 100%);

    #logo {
      margin: 0 auto;
      display: block;
      height: 50%;
      width: 50%;
      filter: drop-shadow(0 10px 8px rgba(0, 40, 80, 0.5));
    }
    #content {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      min-height: 24px;
      height: 100%;
      position: relative;
      text-align: center;
      top: 15%;
      .title {
        color: white;
        font-family: "Quicksand", sans-serif;
        font-size: 4rem;
        padding-bottom: 0px;
        margin-bottom: 0px;
        span {
          font-size: 4rem;
          cursor: pointer;
        }
        &:hover {
          -webkit-animation: MISSION-HOVER 1.5s infinite;
          -moz-animation: MISSION-HOVER 1.5s infinite;
          -o-animation: MISSION-HOVER 1.5s infinite;
          animation: MISSION-HOVER 1.5s infinite;
          animation-direction: alternate;
          animation-timing-function: ease;
        }
        @-webkit-keyframes MISSION-HOVER {
          0%,
          100% {
            font-size: 4rem;
            color: white;
          }
          50% {
            color: #bffcff;
            letter-spacing: 5px;
            text-shadow: 0px 0px 30px rgba(191, 252, 255, 1);
          }
        }
      }
      p {
        color: #e6dbae;
        font-family: "Quicksand", sans-serif;
        font-size: 1.5rem;
        margin: 0 auto;
        padding: 0;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
      }
    }
  }
}

// Button Styling
.cta {
  padding-top: 5vh;
  width: 300px;
  margin: auto;
  text-align: center;
}

.cta a {
  transition: 1s;
  margin: 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid cyan;
  border-radius: 3px;
  width: 100px;
  padding: 10px;
  box-sizing: border-box;
  color: cyan;
}

.cta a:hover,
.cta a:active {
  background-color: #6a2b6a;
  color: white;
}

// Video Styling
.video-background {
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
#vidtop-content {
  top: 0;
  color: #fff;
}
.vid-info {
  position: absolute;
  top: 0;
  right: 0;
  width: 33%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 1rem;
  font-family: Avenir, Helvetica, sans-serif;
}
.vid-info h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0;
  line-height: 1.2;
}
.vid-info a {
  display: block;
  color: #fff;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.6s background;
  border-bottom: none;
  margin: 1rem auto;
  text-align: center;
}
@media (min-aspect-ratio: 16/9) {
  .video-foreground {
    height: 300%;
    top: -100%;
  }
}
@media (max-aspect-ratio: 16/9) {
  .video-foreground {
    width: 300%;
    left: -100%;
  }
}
@media all and (max-width: 600px) {
  .vid-info {
    width: 50%;
    padding: 0.5rem;
  }
  .vid-info h1 {
    margin-bottom: 0.2rem;
  }
}
@media all and (max-width: 500px) {
  .vid-info .acronym {
    display: none;
  }
}
</style>
