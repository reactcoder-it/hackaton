export default ({ children }) => (
  <h1>
    {children}
    <style jsx>{`
      h1 {
        font-size: 20px;
        font-weight: 600;
      }
    `}</style>
  </h1>
)