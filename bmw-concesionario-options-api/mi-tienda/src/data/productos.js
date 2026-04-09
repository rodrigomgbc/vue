const img = (seed) => `https://picsum.photos/seed/${seed}/400/260`

export const productosIniciales = [
  // Serie 3
  { id: 1,  categoriaId: 1, nombre: 'BMW 320d Berlina',    marca: 'Serie 3', precio: 46900, combustible: 'Diésel',    imagen: img('bmw01') },
  { id: 2,  categoriaId: 1, nombre: 'BMW 330i Berlina',    marca: 'Serie 3', precio: 54200, combustible: 'Gasolina',  imagen: img('bmw02') },
  { id: 3,  categoriaId: 1, nombre: 'BMW 330e Híbrido',    marca: 'Serie 3', precio: 57800, combustible: 'Híbrido',   imagen: img('bmw03') },
  { id: 4,  categoriaId: 1, nombre: 'BMW 320i Touring',    marca: 'Serie 3', precio: 49500, combustible: 'Gasolina',  imagen: img('bmw04') },
  { id: 5,  categoriaId: 1, nombre: 'BMW i3 eDrive',       marca: 'Serie 3', precio: 52600, combustible: 'Eléctrico', imagen: img('bmw05') },
  // Serie 5
  { id: 6,  categoriaId: 2, nombre: 'BMW 520d Berlina',    marca: 'Serie 5', precio: 62400, combustible: 'Diésel',    imagen: img('bmw06') },
  { id: 7,  categoriaId: 2, nombre: 'BMW 530i Berlina',    marca: 'Serie 5', precio: 67900, combustible: 'Gasolina',  imagen: img('bmw07') },
  { id: 8,  categoriaId: 2, nombre: 'BMW 540i xDrive',     marca: 'Serie 5', precio: 82500, combustible: 'Gasolina',  imagen: img('bmw08') },
  { id: 9,  categoriaId: 2, nombre: 'BMW i5 eDrive40',     marca: 'Serie 5', precio: 79900, combustible: 'Eléctrico', imagen: img('bmw09') },
  { id: 10, categoriaId: 2, nombre: 'BMW 550e xDrive',     marca: 'Serie 5', precio: 91200, combustible: 'Híbrido',   imagen: img('bmw10') },
  // Serie X
  { id: 11, categoriaId: 3, nombre: 'BMW X1 sDrive18d',    marca: 'Serie X', precio: 44200, combustible: 'Diésel',    imagen: img('bmw11') },
  { id: 12, categoriaId: 3, nombre: 'BMW X3 xDrive20d',    marca: 'Serie X', precio: 59900, combustible: 'Diésel',    imagen: img('bmw12') },
  { id: 13, categoriaId: 3, nombre: 'BMW X5 xDrive40d',    marca: 'Serie X', precio: 89700, combustible: 'Diésel',    imagen: img('bmw13') },
  { id: 14, categoriaId: 3, nombre: 'BMW iX xDrive50',     marca: 'Serie X', precio: 107000, combustible: 'Eléctrico', imagen: img('bmw14') },
  { id: 15, categoriaId: 3, nombre: 'BMW X7 xDrive40i',    marca: 'Serie X', precio: 114500, combustible: 'Gasolina',  imagen: img('bmw15') },
  // Serie M
  { id: 16, categoriaId: 4, nombre: 'BMW M2 Coupé',        marca: 'Serie M', precio: 89900,  combustible: 'Gasolina',  imagen: img('bmw16') },
  { id: 17, categoriaId: 4, nombre: 'BMW M3 Competition',  marca: 'Serie M', precio: 108900, combustible: 'Gasolina',  imagen: img('bmw17') },
  { id: 18, categoriaId: 4, nombre: 'BMW M4 Coupé',        marca: 'Serie M', precio: 103500, combustible: 'Gasolina',  imagen: img('bmw18') },
  { id: 19, categoriaId: 4, nombre: 'BMW M5 CS',           marca: 'Serie M', precio: 172000, combustible: 'Gasolina',  imagen: img('bmw19') },
  { id: 20, categoriaId: 4, nombre: 'BMW M8 Gran Coupé',   marca: 'Serie M', precio: 159000, combustible: 'Gasolina',  imagen: img('bmw20') },
]
