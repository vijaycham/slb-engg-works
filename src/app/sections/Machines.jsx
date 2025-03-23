import React from 'react'

const Machines = () => {
  return (
    <section
      id="machines"
      className="h-screen pt-16 flex items-center justify-center"
    >
      <div className='flex flex-col'>
        <h2 className="text-2xl font-bold text-center mb-6">Our Machines</h2>
        <ul className="text-gray-700 text-center space-y-2">
          <li>🔹 Milling Machine with DRO - 1</li>
          <li>🔹 Surface Grinding Machine - 1</li>
          <li>🔹 Lathe - 2</li>
          <li>🔹 Semi-Automatic Injection Moulding Machine - 2</li>
        </ul>
      </div>
    </section>
  );
}

export default Machines