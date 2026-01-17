'use client'

export function Sidebar() {
  return (
    <div className="p-3 bg-transparent border rounded">
      <h5 className="text-uppercase border-bottom pb-2">Biblioteca Web</h5>
      
      <div className="mb-4">
        <h6>iPasen</h6>
      </div>

      <div className="address-section">
        <h6>Encuéntranos en...</h6>
        <p className="small mb-1"><strong>DIRECCIÓN POSTAL:</strong></p>
        <p className="small text-muted">Avda. Guillermo Reyna, 35<br/>04600 HUÉRCAL-OVERA</p>
      </div>
    </div>
  );
}