import React from 'react';
import styled from 'styled-components';

const TechFireworksCanvas = styled.canvas`
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRandomImageSrc() {
    const srcs = ['img/js-circle.png', 'img/git-circle.png', 'img/html-circle.png'];
    const srcIndex = Math.floor(Math.random() * srcs.length);
    return srcs[srcIndex];
}

function Star({ x = 0, y = 0, radius = 30, color = '#fff' }) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.imageUrl = getRandomImageSrc()
    this.circleImage = new Image()
    this.circleImage.src = this.imageUrl
    this.velocity = {
        x: randomIntFromRange(-10, 15),
        y: randomIntFromRange(10, 30)
    }
    this.gravity = 1
    this.friction = 0.8
}

Star.prototype.draw = function (c) {
    c.save();
    c.drawImage(this.circleImage, this.x, this.y, this.radius * 2, this.radius * 2);
    c.shadowColor = '#fff';
    c.shadowBlur = 20;
    c.restore();
}

Star.prototype.update = function (c) {
    this.draw(c)

    if (this.y + this.radius - this.velocity.y > window.innerHeight - groundHeight && this.x < groundWidth) {
        this.velocity.y = -this.velocity.y * this.friction;
        for (let i = 0; i < 8; i++) {
            // miniStars.push(new MiniStar({ x: this.x, y: this.y, radius: 2 }));
        }
        this.radius -= 5;
    } else if (this.y + this.radius - this.velocity.y > window.innerHeight && this.x >= groundWidth) {
        this.radius = 0;
    } else {
        this.velocity.y -= this.gravity
    }

    this.y -= this.velocity.y;
    this.x += this.velocity.x;
}

function animate(canvas, c) {
    requestAnimationFrame(() => animate(canvas, c))
    c.clearRect(0, 0, canvas.width, canvas.height)


    stars.forEach((star, index) => {
        star.update(c);
        if (star.radius === 0) {
            stars.splice(index, 1)
        }
    })


    if (ticker % randomIntFromRange(30, 50) === 0) {
        const xPos = 200;
        let starWidth;
        const starWidthHelper = Math.random();

        if (starWidthHelper < 0.3) {
            starWidth = 15;
        } else if (starWidthHelper > 0.3 && starWidthHelper < 0.6) {
            starWidth = 20;
        } else {
            starWidth = 30;
        }

        stars.push(new Star({
            x: xPos, y: canvas.height - 460, radius: starWidth, color: 'white'
        }));
    }

    ticker++;
}

// Implementation
let stars = [];
let miniStars;
let ticker = 0;
let groundHeight = 50;
let groundWidth = 900;

const TechFireworks = () => {
    const canvasRef = React.useRef();

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // init(ctx);
        animate(canvas, ctx);
    }, []);

    return (
        <TechFireworksCanvas ref={canvasRef} />
    );
};

export default TechFireworks;