type RoleList = {
  roles: Roles[];
};

export default function HeroRoles({ roles }: RoleList) {
  return (
    <div>
      {roles.map((ability) => (
        <div key={ability.id} className="">
          <p>{ability.name}</p>
        </div>
      ))}
    </div>
  );
}
