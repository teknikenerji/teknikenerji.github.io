const navmenu=[
  {tr: "Teklif İsteyin", en:"Offer", url: "https://docs.google.com/forms/d/e/1FAIpQLSey4gA3_3uGmmld1wrijvXI7bHfwiVcUpeW8vjIKpU79FTwdQ/viewform", class: "sidenav-close btn waves-effect white-text #b71c1c red darken-4", target:"_blank"},
  {tr: "Hakkımızda", en:"About", url:"#about", class:"sidenav-close waves-effect waves-light btn #558b2f light-green darken-3"},
  {tr: "İletişim", en:"Contact", url:"#contact", class:"sidenav-close waves-effect waves-light btn #558b2f light-green darken-3"},
  {tr: "Facebook", en:"Facebook", url: "https://www.facebook.com/testeknikenerji", class: "sidenav-close waves-effect waves-light btn #3f51b5 indigo", target:"_blank", tooltip:"Bizi Takip Edin!"},
  {tr: "Skype", en:"Skype", url: "skype:live:3251040?chat", class: "sidenav-close waves-effect waves-light btn #00b0ff light-blue accent-3"},
];
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        indicators: true,
        duration: 100,
      });
      $('.sidenav').html(navmenu.map(menuCreator));
      $('.tooltipped').tooltip();
});
autoplay(); 
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 5000);
}
function menuCreator(item){
  return '<li><a href="'+item.url+'"'+(item.class ?'class="'+item.class+'"' : '' )+(item.target ?'target="'+item.target+'"' : '' )+'>'+item.tr+'</a></li>';
}
$('.sidenav').sidenav();