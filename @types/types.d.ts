import {
  User as PrismaUser,
  Client as PrismaClientModel,
  Product as PrismaProduct,
  Store as PrismaStore,
  PlaceOfWork as PrismaPlaceOfWork,
  StorePlaceOfWork as PrismaStorePlaceOfWork,
  SocialLinks as PrismaSocialLinks,
  Review as PrismaReview,
  Professional as PrismaProfessional,
  CategoryProfessional as PrismaCategoryProfessional,
  CategoryProduct as PrismaCategoryProduct,
  Admin as PrismaAdmin,
  Permission as PrismaPermission,
  AdminLog as PrismaAdminLog,
  StoreStatusHistory as PrismaStoreStatusHistory,
  UserStatusHistory as PrismaUserStatusHistory,
} from '@prisma/client';

// Enums
export {
  UserRole,
  SocialPlatform,
  AdminRoleLevel,
  PermissionType,
  EntityType,
  StoreStatus,
  UserStatus,
};

export type User = PrismaUser;
export type Client = PrismaClientModel;
export type Product = PrismaProduct;
export type Store = PrismaStore;
export type PlaceOfWork = PrismaPlaceOfWork;
export type StorePlaceOfWork = PrismaStorePlaceOfWork;
export type SocialLinks = PrismaSocialLinks;
export type Review = PrismaReview;
export type Professional = PrismaProfessional;
export type CategoryProfessional = PrismaCategoryProfessional;
export type CategoryProduct = PrismaCategoryProduct;
export type Admin = PrismaAdmin;
export type Permission = PrismaPermission;
export type AdminLog = PrismaAdminLog;
export type StoreStatusHistory = PrismaStoreStatusHistory;
export type UserStatusHistory = PrismaUserStatusHistory;

// Exemplo de tipos derivados ou com relações populadas (requer o uso de `include` ou `select` no Prisma Client)
// Estes tipos são mais complexos e dependem de como você querya seus dados.

// Exemplo: Usuário com seu perfil de cliente (se existir)
export type UserWithClient = PrismaUser & {
  client?: PrismaClientModel | null;
};

// Exemplo: Loja com seus produtos e redes sociais
export type StoreWithDetails = PrismaStore & {
  products: PrismaProduct[];
  social_links: PrismaSocialLinks[];
  professional: PrismaProfessional;
  category_professional: PrismaCategoryProfessional;
};

// Exemplo: Produto com sua categoria e reviews
export type ProductWithDetails = PrismaProduct & {
  category: PrismaCategoryProduct;
  reviews: PrismaReview[];
  store: PrismaStore;
};

// Exemplo: Review com o usuário que a criou e o produto relacionado
export type ReviewWithUserAndProduct = PrismaReview & {
  user: PrismaUser;
  product: PrismaProduct;
};

// Exemplo: Profissional com sua categoria e lojas
export type ProfessionalWithDetails = PrismaProfessional & {
  category: PrismaCategoryProfessional;
  stores: PrismaStore[];
  user: PrismaUser;
};

// Exemplo: Admin com suas permissões
export type AdminWithPermissions = PrismaAdmin & {
  permissions: PrismaPermission[];
  user: PrismaUser;
};

// Você pode adicionar mais tipos derivados aqui conforme a necessidade da sua aplicação.
