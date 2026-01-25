// database.service.ts
import { neon } from '@neondatabase/serverless';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit {
    private sql;

    constructor(private configService: ConfigService) {}

    onModuleInit() {
        const databaseUrl = this.configService.get<string>('DATABASE_URL');
        if (!databaseUrl) {
            throw new Error('DATABASE_URL is not defined in the environment.');
        }
        // Initializing the neon instance
        this.sql = neon(databaseUrl);
    }

    /**
     * Executes a high-precision query against the GFA strategic growth data.
     * Use tagged templates for SQL injection protection.
     */
    async executeQuery(query: string, params: any[] = []) {
        try {
            return await this.sql(query, params);
        } catch (error) {
            // Institutional logging logic here
            console.error('Database Operation Failed:', error);
            throw error;
        }
    }
}
