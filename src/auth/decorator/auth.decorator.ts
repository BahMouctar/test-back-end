import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Role } from "src/core/shared/constant/role.enum";
import { RolesGuard } from "src/core/shared/guards/roles.guard";

export const Auth = (...roles: Role[]) => applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard('jwt'), RolesGuard),
);
