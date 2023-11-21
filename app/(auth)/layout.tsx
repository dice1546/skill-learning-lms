const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full bg-white flex items-center justify-center">
      {children}
    </div>
   );
}
 
export default AuthLayout;