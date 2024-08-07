const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

// Apply ScrollReveal to your elements
scrollReveal.reveal(
    `
    .logo, 
    .header-text,
    .btn-container,
    .details-text,
    .details-image,
    .more-text,
    .more-img,
    .workflow-text,
    .workflow-cards,
    .brands-logos,
    .footer-logo,
    .footer nav ul,
    .footer-socials
    `,
    { interval: 100 }
);
