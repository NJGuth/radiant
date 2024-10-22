type RoleTagProps = {
  roles?: {
    heroId: string;
    roleId: string;
    role: {
      id: string;
      roleName: string;
    };
  }[];
};

export default function RoleTags({ roles }: RoleTagProps) {
  if (!roles || roles.length === -0) {
    return <div>No roles available</div>;
  }

  return (
    <div>
      {roles.map((roleItem) => (
        <div key={`${roleItem.heroId}-${roleItem.roleId}`}>
          <p>{roleItem.role.roleName}</p>
        </div>
      ))}
    </div>
  );
}
