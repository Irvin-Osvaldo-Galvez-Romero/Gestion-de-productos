import React from 'react';
import jsPDF from 'jspdf';

const GeneratePDF = () => {
  const handleGeneratePDF = () => {
    const doc = new jsPDF();
    // Implementar la lógica para generar un archivo PDF
    doc.text('Product List', 10, 10);
    doc.save('products.pdf');
  };

  return (
    <div>
      <h2>Generate PDF</h2>
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default GeneratePDF;