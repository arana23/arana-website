import React from 'react';
import prof from '../components/Screen Shot 2021-12-25 at 6.23.41 PM.png';
export default function AboutMe() {
  return (
  <div class = 'aboutme'>
  <h2>About Me!</h2>
  <img class = 'prof' src={prof} alt="picofaparajita" />
  <h1 class = 'intro'>Hi There! My name is Aparajita and I'm so glad you're here :) I love all things technology, fashion, and productivity. In my free time I like cooking, writing, and hanging out with friends.<br/><br/>Communication is where new ideas come from so feel free to reach out!<br/>
  <a href="https://www.linkedin.com/in/aparajita-rana-404090179/">Connect With Me!</a>
  <a href="https://medium.com/@arana3">My Medium Blog!</a>
  <a href="https://www.youtube.com/c/LifeOfRanaa">My Youtube Channel!</a>
  </h1>
  </div>
  );
}