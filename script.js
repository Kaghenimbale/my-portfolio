const navLink = document.querySelector('.nav-link');
const menu = document.querySelector('.menu-Icon');
const close = document.querySelector('.closeIcon');
const menuOption = document.querySelectorAll('.nav-link li');
const work = document.querySelector('#Portofolio');
const popup = document.querySelector('.Popup');

menu.addEventListener('click', () => {
  navLink.style.marginLeft = 0;
});

close.addEventListener('click', () => {
  navLink.style.marginLeft = '-1000px';
});

menuOption.forEach((list) => {
  list.addEventListener('click', () => {
    navLink.style.marginLeft = '-1000px';
  });
});

const projects = [
  {
    id: 'Project1',
    Image: {
      img: './image/Snapshoot-Portfolio1.png',
      alt: 'Snapshoot1',
    },
    name: 'TONIC',
    description: [
      'CANOPY',
      'Back End Dev',
      '2015',
      {
        src: 'image/dot.png',
        altText: 'Counter',
      },
    ],
    paragraph: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    languages: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
    button: 'See Project',
  },

  {
    id: 'Project2',
    Image: {
      img: './image/Snapshoot-Portfolio2.png',
      alt: 'Snapshoot2',
    },
    name: 'Multi-Post Stories',
    description: [
      'CANOPY',
      'Back End Dev',
      '2015',
      {
        src: 'image/dot.png',
        altText: 'Counter',
      },
    ],
    paragraph: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    languages: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
    button: 'See Project',
  },

  {
    id: 'Project3',
    Image: {
      img: './image/Snapshoot-Portfolio3.png',
      alt: 'Snapshoot3',
    },
    name: 'TONIC',
    description: [
      'CANOPY',
      'Back End Dev',
      '2015',
      {
        src: 'image/dot.png',
        altText: 'Counter',
      },
    ],
    paragraph: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    languages: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
    button: 'See Project',
  },

  {
    id: 'Project4',
    Image: {
      img: 'image/Snapshoot-Portfolio4.png',
      alt: 'Snapshoot4',
    },
    name: 'Multi-Post Stories',
    description: [
      'CANOPY',
      'Back End Dev',
      '2015',
      {
        src: 'image/dot.png',
        altText: 'Counter',
        CloseIcon: 'image/cancel.svg',
      },
    ],
    paragraph: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    languages: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
    button: 'See Project',
  },
];

projects.forEach((project) => {
  const card = document.createElement('div');
  const projectImg = document.createElement('div');
  const projectdescription = document.createElement('div');

  const Content = `
      <h3>${project.name}</h3>
      <div class='profile-description'>
      <h5>${project.description[0]}</h5>
      <img src="${project.description[3].src}" alt="${project.description.altText}">
      <p>${project.description[1]}</p>
      <img src="${project.description[3].src}" alt="${project.description.altText}">
      <p>${project.description[2]}</p>
      </div>
      <div class="paragraph-description">
      <p>${project.paragraph}</p>
      </div>
      <ul class="lang">
      ${project.languages.map((language) => (`${language}` === 'Ruby on Rails' ? `<li class='ruby'>${language}</li>` : `<li>${language}</li>`)).join('')}
      </ul>
      <button class="btn_open" type="button" data-project=${project.id}>${project.button}</button>
      `;

  card.id = project.id;
  card.className = 'Project';

  const images = `
  <img class='imgs' src="${project.Image.img}" alt="${project.Image.alt}">
  `;
  const imgs = document.querySelectorAll('.projectImg');
  imgs.forEach((img, index) => {
    if (index % 2 !== 0) { img.classList.add('inverse'); }
  });

  const projectContent = document.querySelectorAll('.projectdescription');

  projectContent.forEach((project, index) => {
    if (index % 2 !== 0) { project.classList.add('normal'); }
  });

  projectImg.classList.add('projectImg');
  projectImg.innerHTML = images;
  card.appendChild(projectImg);

  projectdescription.classList.add('projectdescription');
  projectdescription.innerHTML = Content;
  card.appendChild(projectdescription);

  work.appendChild(card);
});

const hiddepopup = () => {
  popup.classList.remove('show');
  const container = document.querySelector('.containerPop');
  popup.removeChild(container);
};

const renderPopup = (project) => {
  //   POPUP WINDOW

  const container = document.createElement('div');
  const popupcontent = `
  <div class="popUp1">
  <div onclick="hiddepopup()" class='closePop'><img src='image/cancel.svg' alt="closeIcon"></div>
  <h3 class="popuph3">${project.name}</h3>
  <div class='profile-description-pop'>
  <h5 class="popuph5">${project.description[0]}</h5>
  <img src="${project.description[3].src}" alt="${project.description.altText}">
  <p class="popupP">${project.description[1]}</p>
  <img src="${project.description[3].src}" alt="${project.description.altText}">
  <p class="popupP">${project.description[2]}</p>
  </div>
  </div>
  `;

  const imagesPop = `
  <div class='imgPop'><img src="${project.Image.img}" alt="${project.Image.alt}"></div>
  `;

  const secondpart = `
  <div class="popUp2">
  <div class="paragraph-pop">
  <p class="popupPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi doloribus corporis quam quod? Commodi fuga reiciendis est. Veritatis tenetur repudiandae in temporibus, nulla corporis vero qui distinctio pariatur repellat iusto sit. Sit alias labore ducimus.</p>
  </div>
  <div class='para2-pop'>
  <ul class="poplang">
  ${project.languages.map((language) => (`${language}` === 'Ruby on Rails' ? `<li class='ruby li'>${language}</li>` : `<li class='li'>${language}</li>`)).join('')}
  </ul>
  <div class='livebtn'>
  <button class="PopUpbtn buttonp" type="button">See live <img src="image/live.png"></button>
  <button class="PopUpbtn" type="button">See source <img src="image/bluegithub.png"></button>
  </div>
  </div>
  </div>
  `;

  container.classList.add('containerPop');
  container.innerHTML = popupcontent;
  container.innerHTML += imagesPop;
  container.innerHTML += secondpart;
  popup.classList.add('show');
  popup.append(container);
};

document.addEventListener('DOMContentLoaded', () => {
  const projectBtns = document.querySelectorAll('.btn_open');
  const handleClick = (e) => {
    const projectId = e.target.dataset.project;
    const projectData = projects.find((project) => project === projectId);
    renderPopup(projectData);
  };

  Array.from(projectBtns).forEach((btn) => {
    btn.addEventListener('click', handleClick);
  });
});

hiddepopup();
