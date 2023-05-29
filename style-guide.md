# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Soft orange: hsl(35, 77%, 62%)
- Soft red: hsl(5, 85%, 63%)

### Neutral

Off-white: hsl(36, 100%, 99%)
Grayish blue: hsl(233, 8%, 79%)
Dark grayish blue: hsl(236, 13%, 42%)
Very dark blue: hsl(240, 100%, 5%)

## Typography

### Body Copy

- Font size (paragraph): 15px

### Font

- Family: [Inter](https://fonts.google.com/specimen/Inter)
- Weights: 400, 700, 800



@media screen and (max-width: 800px) {
    .hamburger-menu,
    .close-menu {
  width: 25px;
  height: 23px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 100;
}

.close-menu {
    display: none;
    position: fixed;
}

.menu {
    display: none; 
    width: 200px;
    height: 100vh;
    position: fixed;
    top: -20px;
    right: -5px;
    padding-top: 120px;
    padding-left: 0;
    background-color: #fff;
    transition: right 0.3s ease; 
    z-index: 99;
}

li a {
    color: hsl(240, 100%, 5%);
    display: block;
    padding-bottom: 20px;
    padding-left: 20px;
    
}

}



   .menu { 
        display: flex !important;
        align-items: center;
        right: 0 !important;
    }

    .menu a {
        color:  hsl(236, 13%, 42%);
        font-size: 14px;
        padding-left: 40px;
    }

    .hamburger-menu, .close-menu {
        display: none;
    }