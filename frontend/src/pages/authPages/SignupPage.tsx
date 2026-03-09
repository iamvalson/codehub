import CodePreviewPanel from "@/components/CodePreviewPanel";
import LoginForm from "@/components/LoginForm";
import { useAuth } from "@/features/auth/hooks/useAuth";
import "material-symbols";

const SignupPage = () => {
  const { role, handleRoleChange, handleSubmit } = useAuth();

  return (
    <div className="overflow-hidden h-screen flex font-display">
      <CodePreviewPanel />
      <section className="flex-1 flex flex-col items-center justify-center bg-background-dark px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="md:hidden font-mono text-xl font-bold tracking-tighter mb-6 text-white">
          CodeHub
        </h1>
        <LoginForm
          role={role}
          onRoleChange={handleRoleChange}
          onSubmit={handleSubmit}
          signup={true}
        />
      </section>
    </div>
  );
};

export default SignupPage;
