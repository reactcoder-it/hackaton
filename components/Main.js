export default ({ userRole, children }) => (
  <div className="main">
    {children}
    <style jsx>{`
      .main {
        padding: 20px 20px 20px 220px;
        overflow-y: scroll;
      }
    `}</style>
  </div>
)