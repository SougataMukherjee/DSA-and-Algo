const withLayout = (WrappedComponent) => {
  return function LayoutWrapper(props) {
    return (
      <div
        style={{
          backgroundColor: "#f5f5f5",
          margin: "20px",
          padding: "20px",
          minHeight: "100vh",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withLayout;

const MyComponent = () => {
  return <div></div>;
};
const EnhancedComponent = Comp(MyComponent);
