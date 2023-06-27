export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Item: {
        Row: {
          created_at: string
          customize: string
          id: number
          materials: Json
          name: string
          pictures: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          customize: string
          id?: number
          materials: Json
          name: string
          pictures: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          customize?: string
          id?: number
          materials?: Json
          name?: string
          pictures?: Json
          updated_at?: string
        }
        Relationships: []
      }
      Order: {
        Row: {
          accepted: boolean
          created_at: string
          id: number
          item_id: number
          shop_id: number
          updated_at: string
          user_id: number
        }
        Insert: {
          accepted: boolean
          created_at?: string
          id?: number
          item_id: number
          shop_id: number
          updated_at?: string
          user_id: number
        }
        Update: {
          accepted?: boolean
          created_at?: string
          id?: number
          item_id?: number
          shop_id?: number
          updated_at?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Order_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "Item"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Order_shop_id_fkey"
            columns: ["shop_id"]
            referencedRelation: "Shop"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Order_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Shop: {
        Row: {
          address: string
          created_at: string
          description: string
          id: number
          logo: Json
          name: string
          phone_number: string
          shop_owner_id: number
          social_medias: Json
          updated_at: string
        }
        Insert: {
          address: string
          created_at?: string
          description: string
          id?: number
          logo: Json
          name: string
          phone_number: string
          shop_owner_id: number
          social_medias: Json
          updated_at?: string
        }
        Update: {
          address?: string
          created_at?: string
          description?: string
          id?: number
          logo?: Json
          name?: string
          phone_number?: string
          shop_owner_id?: number
          social_medias?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Shop_shop_owner_id_fkey"
            columns: ["shop_owner_id"]
            referencedRelation: "ShopOwner"
            referencedColumns: ["id"]
          }
        ]
      }
      ShopOwner: {
        Row: {
          address: string
          contact_info: string
          created_at: string
          email: string
          id: number
          password: string
          updated_at: string
          username: string
        }
        Insert: {
          address: string
          contact_info: string
          created_at?: string
          email: string
          id?: number
          password: string
          updated_at?: string
          username: string
        }
        Update: {
          address?: string
          contact_info?: string
          created_at?: string
          email?: string
          id?: number
          password?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
      User: {
        Row: {
          created_at: string
          email: string
          id: number
          password: string
          updated_at: string
          username: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          password: string
          updated_at?: string
          username: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          password?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
