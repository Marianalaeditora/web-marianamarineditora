export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 font-sans">
      <section className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Mariana Marín</h1>
        <p className="text-xl italic mb-6">"Quiero ser como ella" — Esther Tusquets</p>
        <p className="text-lg">Edito, corrijo y acompaño procesos de escritura con mirada crítica, oficio y amor por las palabras. Soy Mariana será otro día, pero los libros siempre encuentran su momento.</p>
      </section>

      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
        <ul className="space-y-4 text-left">
          <li>
            <strong>Gestión editorial:</strong> Acompañamiento integral desde el manuscrito hasta la publicación.
          </li>
          <li>
            <strong>Informe de lectura:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Hasta 120 páginas</li>
              <li>De 121 a 350 páginas</li>
              <li>Más de 350 páginas</li>
            </ul>
          </li>
          <li>
            <strong>Corrección de estilo:</strong> Precio por página, con enfoque en claridad, fluidez y tono.
          </li>
          <li>
            <strong>Edición:</strong> Desde $12.000 por página.
          </li>
          <li>
            <strong>Escritura de propuestas editoriales:</strong> Para postular a editoriales o fondos.
          </li>
          <li>
            <strong>Edición de textos breves:</strong> Hasta 120 páginas, con foco en estructura, narrativa y presentación profesional.
          </li>
          <li>
            <strong>Lectora editorial profesional:</strong> Lectura crítica con perspectiva curatorial.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Sobre mí</h2>
        <p className="text-lg">
          Soy editora y correctora de estilo. Acompaño a escritoras, escritores y editoriales en la construcción de libros cuidados, potentes y bien escritos. Estudié Letras Modernas y me formé en análisis del discurso. Tengo más de diez años de experiencia y me especializo en edición de narrativa, ensayo, literatura testimonial y textos híbridos. Trabajo con sensibilidad, atención al detalle y mirada crítica, sin perder de vista el deseo de quien escribe.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Miniblog</h2>
        <p className="text-lg mb-2">Espacio donde comparto ideas, lecturas y reflexiones sobre el oficio editorial y la escritura.</p>
        <p className="text-blue-600 underline cursor-pointer">(Próximamente)</p>
      </section>

      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <p className="text-lg">Podés escribirme a <a href="mailto:marinmarianac@gmail.com" className="text-blue-600 underline">marinmarianac@gmail.com</a> o encontrarme en Instagram como <a href="https://instagram.com/marianaseraotrodia" target="_blank" className="text-blue-600 underline">@marianaseraotrodia</a>.</p>
      </section>
    </main>
  );
}