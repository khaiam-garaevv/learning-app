import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { QuizController } from './quiz/quiz.controller';
import { QuizService } from './quiz/quiz.service';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [UsersModule, QuizModule],
  controllers: [AppController, QuizController],
  providers: [AppService, QuizService],
})
export class AppModule {}
