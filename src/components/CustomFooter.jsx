const CustomFooter = function () {
  return (
    <footer className="text-center small bg-[#D4CAB6] py-2">
      <p className="mb-0 text-black text-lg">
        Giulia Rizzo - Portfolio <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}
export default CustomFooter
