import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const Profile = async () => {
  const { getUser, isAuthenticated} = getKindeServerSession();
  const user = await getUser();
  return (
    <main className="mt-10">
      <h2 className="text-3xl font-bold text-center mt-20 mb-5">
        Welcome to your Profile
      </h2>
      {(await isAuthenticated()) ? (
        <div className="text-center">
          <h2 className="text-xl font-semibold my-3">{user.given_name} {user.family_name}</h2>
          <p className="font-semibold">{user.email}</p>
        </div>
      ) : (
        <p>Please sign in or register to entry this page!</p>
      )}
    </main>
  );
};

export default Profile;
