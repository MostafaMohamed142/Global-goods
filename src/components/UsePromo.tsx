import { useState } from 'react';

export function usePromoCode() {
  const [promoCode, setPromoCode] = useState('');

  const generatePromoCode = () => {
    const discountPercentage = Math.floor(Math.random() * 70) + 1;

    const codeLength = 8;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let promoCode = '';

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        promoCode += characters.charAt(randomIndex);
    }

    // Combine the discount percentage and code
    console.log(`${discountPercentage}%OFF-${promoCode}`)
    return setPromoCode(`${discountPercentage}%OFF-${promoCode}`);
  };

  return { promoCode, generatePromoCode };
}