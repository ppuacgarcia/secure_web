import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { name: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.name,
      loginDto.password,
    );
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  protectedRoute() {
    return { message: 'This route is protected!' };
  }
}
