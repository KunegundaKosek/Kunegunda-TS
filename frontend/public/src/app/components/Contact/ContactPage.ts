import { contactData } from './ContactPageData';

export default function ContactPage(title: string) {
    const main = document.getElementById('main')! as HTMLElement;

    main.textContent = '';

    const section: HTMLElement = document.createElement('section');
    section.className = 'section';

    const h2: HTMLHeadingElement = document.createElement('h2');
    h2.textContent = title;
    h2.className = 'section__title';
    
    const span: HTMLSpanElement = document.createElement('span');
    span.textContent = "I am open to cooperation and ready to answer your questions. Contact me via email or social media.";
    span.className = 'section__span';
    
    section.append(h2, span);

    contactData.forEach((element) => {
        const iconBox: HTMLParagraphElement = document.createElement('p');
        iconBox.className = 'section__iconBox';
        const icon: HTMLElement = document.createElement('i');
        icon.className = element.icons;
        iconBox.appendChild(icon);

        const p: HTMLParagraphElement = document.createElement('p');
        p.textContent = element.text;
        p.className = 'section__p';

        const a: HTMLAnchorElement = document.createElement('a');

        if (element.name === 'E-mail') {
            a.href = `mailto:${element.href}`;
            a.textContent = element.href;
            a.className = 'section__a';
        } else {
            a.href = element.href;
            a.target = '_blank';
            a.textContent = element.href;
            a.className = 'section__a';
        }

        section.append(iconBox, p, a);
    });

    main.appendChild(section);
}
