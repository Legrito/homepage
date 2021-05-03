
    const buttonEl = document.querySelector('button.theme-switcher');
    const experienceColumn = document.querySelector('div.ten.wide.column');
    const unicornEl = document.querySelector('.unicorn-wrap');
    const crownEl = document.querySelector('.crown');
    const magicWandEl = document.querySelector('.magic-wand');


    const onChangeTheme = (e) => {
        unicornEl.classList.toggle('js-show-unicorn');
        crownEl.classList.toggle('js-show');
        magicWandEl.classList.toggle('js-show');
        
    }



    addEventListener('click', onChangeTheme);