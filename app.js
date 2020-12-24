const animation = anime({
  targets: '.scroll',
  translateY:'-97vh',
  duration:1000,
  elasticity: 400,
  easing: 'easeInOutSine',
  autoplay: false,
});
/**
* Calculate the scroll percentage position
*/
const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;
  
  return (docST + bodyST) / (docSH - docCH) * 100
}
 
/**
 * Add a scroll listener on the window object to
 * control animations based on scroll percentage.
 */

animation.seek(animation.duration - (scrollPercent() / 100) * animation.duration);
window.onscroll = () => {
  animation.seek(animation.duration - (scrollPercent() / 100) * animation.duration);
};
 