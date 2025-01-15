import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { HelloController } from './hello/hello.controller';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [HelloController, UsersController],
})

export class AppModule { }
