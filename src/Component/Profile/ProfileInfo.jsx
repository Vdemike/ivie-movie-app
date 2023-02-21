function ProfileInfo(props) {
  return (
    <section className="flex justify-center flex-col items-center">
      <h3 className="font-title text-xl">{props.title}</h3>
      <div className="rounded bg-black text-white m-2 p-4">
        Qd on aura acces a la db, utiliser map pour prendre les infos du user.
      </div>
    </section>
  );
}
export default ProfileInfo;
